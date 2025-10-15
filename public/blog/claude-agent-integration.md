# Integrating MIRIX into Claude Agent SDK

*Giving Your Claude Agent Persistent Memory*

---

## Introduction

Claude agents are powerful, but they lack persistent memory across conversations. Every time you restart your agent, it forgets everything from previous sessions. MIRIX solves this by providing a sophisticated memory system that remembers context, preferences, and past interactions.

In this guide, we'll walk through how to integrate MIRIX into the Claude Agent SDK, transforming a stateless agent into one with long-term memory capabilities.

## What MIRIX Adds to Claude Agents

By integrating MIRIX, your Claude agent gains:

- **Persistent Memory**: Remembers conversations across sessions
- **Context-Aware Responses**: Retrieves relevant past information automatically
- **Intelligent Memory Updates**: Periodically stores important conversation details
- **Dynamic System Prompts**: Injects relevant memory into each interaction

## Visual Code Comparison

Below you can see the original code with **🟢 MIRIX additions shown in green**:

```diff
#!/usr/bin/env python3
import os
import asyncio
- from claude_agent_sdk import ClaudeSDKClient, ClaudeAgentOptions, AssistantMessage
+ from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage
from dotenv import load_dotenv
+ from mirix import Mirix

load_dotenv()

+ # Configuration
+ MEMORY_UPDATE_INTERVAL = 3
+ REINIT_INTERVAL = 1
+ KEEP_LAST_N_TURNS = 50
+ 
+ def build_system_prompt(mirix_agent=None, user_id=None, conversation_buffer=""):
+     """Build system prompt with memory context"""
+     system_prompt = "You are a helpful assistant."
+     if mirix_agent and user_id and conversation_buffer:
+         memory = mirix_agent.extract_memory_for_system_prompt(conversation_buffer, user_id)
+         if memory:
+             system_prompt += f"\nRelevant Memory: {memory}"
+     return system_prompt.replace("\n", "  ")
+ 
+ def get_agent_options(system_prompt, session_id=None):
+     """Helper to create agent options"""
+     return ClaudeAgentOptions(
+         resume=session_id,
+         allowed_tools=["Task", "Bash", "Glob", "Grep", "Read", "Edit", ...],
+         system_prompt=system_prompt,
+         model="claude-sonnet-4-5",
+         max_turns=50
+     )

async def run_agent():
+     # Initialize MIRIX
+     mirix_agent = Mirix(
+         model_name="gemini-2.0-flash",
+         api_key=os.getenv("GEMINI_API_KEY"),
+     )
+     user = mirix_agent.create_user(user_name="Alice")
+     
+     # Tracking variables
+     conversation_history = []
+     turn_count = 0
+     turns_since_reinit = 0
+     session_id = None
    
-     options = ClaudeAgentOptions(
-         allowed_tools=[...],
-         system_prompt="You are a helpful assistant.",
-         model="claude-4-sonnet-20250514",
-         max_turns=50
-     )
-     
-     async with ClaudeSDKClient(options=options) as client:
+     try:
          while True:
+             # Build options with dynamic prompt
+             options = get_agent_options(build_system_prompt(), session_id)
+             
              try:
                  user_input = input("User: ").strip()
                  if user_input.lower() in ['exit', 'quit', 'bye']:
                      break
                  if not user_input:
                      continue
+                 
+                 # Periodically rebuild prompt with memory
+                 if turns_since_reinit >= REINIT_INTERVAL:
+                     combined = "\n\n".join([f"[User] {u}\n[Assistant] {a}" 
+                                            for u, a in conversation_history])
+                     prompt = build_system_prompt(mirix_agent, user.id, combined)
+                     options = get_agent_options(prompt, session_id)
+                     turns_since_reinit = 0
                  
                  print("Agent: ", end="", flush=True)
-                 await client.query(user_input)
-                 async for message in client.receive_response():
+                 
+                 # Query and collect response
+                 async for message in query(prompt=user_input, options=options):
+                     if hasattr(message, 'subtype') and message.subtype == 'init':
+                         session_id = message.data.get('session_id')
+                     
                      if hasattr(message, 'content'):
                          for block in message.content:
                              if hasattr(block, 'text'):
                                  print(block.text, end='\n', flush=True)
                      
                      if isinstance(message, AssistantMessage):
-                         assistant_message = message.content
+                         assistant_message = message
+                 
+                 # Store conversation
+                 response = "\n".join([b.text for b in assistant_message.content 
+                                      if hasattr(b, 'text')])
+                 conversation_history.append((user_input, response))
+                 
+                 # Trim history
+                 if len(conversation_history) > KEEP_LAST_N_TURNS:
+                     conversation_history = conversation_history[-KEEP_LAST_N_TURNS:]
+                 
+                 turn_count += 1
+                 turns_since_reinit += 1
+                 
+                 # Background memory update
+                 if turn_count % MEMORY_UPDATE_INTERVAL == 0:
+                     recent = "\n\n".join([f"[User] {u}\n[Assistant] {a}" 
+                                          for u, a in conversation_history[-MEMORY_UPDATE_INTERVAL:]])
+                     asyncio.create_task(asyncio.to_thread(
+                         mirix_agent.add, recent, user_id=user.id
+                     ))
+                     print(f"💾 Memory updating in background...\n")
                  
              except KeyboardInterrupt:
                  break
              except Exception as e:
                  print(f"❌ Error: {e}")
+     finally:
+         pass

if __name__ == "__main__":
    asyncio.run(run_agent())
```

### Key Changes Summary

**🟢 What MIRIX Adds:**

1. **Memory Initialization** - Create MIRIX instance and user profile
2. **Conversation Tracking** - Store recent interactions in a list with automatic cleanup
3. **Dynamic System Prompts** - Inject relevant memories periodically via `build_system_prompt()`
4. **Helper Function** - `get_agent_options()` to manage agent configuration
5. **Session Management** - Capture and resume sessions across interactions
6. **Smart Memory Updates** - Only send recent conversations (last N turns) to avoid redundancy
7. **Non-blocking Updates** - Save to MIRIX in background using `asyncio.create_task()`

**Before (Original):**
- Simple conversation loop with `ClaudeSDKClient`
- No memory between sessions
- Static system prompt
- No session resumption

**After (With MIRIX):**
- Intelligent memory system with `query()` API
- Persistent context across sessions
- Dynamic prompts with relevant history
- Session resumption support
- Non-blocking background memory updates
- Efficient memory management (only recent conversations sent)

## Step-by-Step Integration Guide

### 1. Install Dependencies

```bash
pip install mirix claude-agent-sdk
```

### 2. Complete Integration Code

Here's the complete code to integrate MIRIX into your Claude agent:


```python
#!/usr/bin/env python3
import os
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage
from dotenv import load_dotenv
from mirix import Mirix

load_dotenv()

# Configuration
MEMORY_UPDATE_INTERVAL = 3  # Update memory every N turns
REINIT_INTERVAL = 1  # Rebuild system prompt every N turns
KEEP_LAST_N_TURNS = 50  # Keep last N turns in buffer

def build_system_prompt(mirix_agent=None, user_id=None, conversation_buffer=""):
    """Build system prompt with optional Mirix memory context"""
    system_prompt = """You are a helpful assistant."""
    
    if mirix_agent and user_id and conversation_buffer:
        memory_context = mirix_agent.extract_memory_for_system_prompt(
            conversation_buffer, user_id
        )
        if memory_context:
            system_prompt += "Relevant Memory Context:\n" + memory_context
    
    return system_prompt.replace("\n", "  ")

def get_agent_options(system_prompt, session_id=None):
    """Get ClaudeAgentOptions with the given system prompt"""
    allowed_tools = [
        "Task", "Bash", "Glob", "Grep", "ExitPlanMode",
        "Read", "Edit", "MultiEdit", "Write", "NotebookEdit",
        "WebFetch", "TodoWrite", "WebSearch", "BashOutput", "KillBash"
    ]
    
    if session_id:
        return ClaudeAgentOptions(
            resume=session_id,
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50
        )
    else:
        return ClaudeAgentOptions(
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50
        )

async def run_agent():
    """Run the comprehensive Claude Code agent with periodic memory updates"""
    
    # Initialize Mirix memory agent
    mirix_agent = Mirix(
        model_name="gemini-2.0-flash",
        api_key=os.getenv("GEMINI_API_KEY"),
    )
    user = mirix_agent.create_user(user_name="Alice")
    
    # Track conversation for memory updates
    conversation_history = []
    turn_count = 0
    turns_since_reinit = 0
    session_id = None
    
    try:
        while True:
            # Initial system prompt (without memory)
            options = get_agent_options(build_system_prompt(), session_id)
            
            try:
                user_input = input("User: ").strip()

                if user_input.lower() in ['exit', 'quit', 'bye']:
                    print("👋 Goodbye!")
                    break
                
                if not user_input:
                    continue

                # Rebuild system prompt every REINIT_INTERVAL turns
                if turns_since_reinit >= REINIT_INTERVAL:
                    print(f"\n🔄 Rebuilding system prompt with latest Mirix memory...")
                    combined_conversation = ""
                    for user_msg, assistant_msg in conversation_history:
                        combined_conversation += f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
                    
                    system_prompt = build_system_prompt(
                        mirix_agent=mirix_agent,
                        user_id=user.id,
                        conversation_buffer=combined_conversation
                    )
                    options = get_agent_options(system_prompt, session_id)
                    turns_since_reinit = 0
                
                print("Agent: ", end="", flush=True)
                
                assistant_message = None

                # Query with updated system prompt
                async for message in query(prompt=user_input, options=options):
                    # Capture session ID from init message
                    if hasattr(message, 'subtype') and message.subtype == 'init':
                        session_id = message.data.get('session_id')

                    if hasattr(message, 'content'):
                        for block in message.content:
                            if hasattr(block, 'text'):
                                print(block.text, end='\n', flush=True)
                    
                    if isinstance(message, AssistantMessage):
                        assistant_message = message
                
                # Extract assistant response
                assistant_response_strs = []
                for block in assistant_message.content:
                    if hasattr(block, 'text'):
                        assistant_response_strs.append(block.text)
                assistant_response = "\n".join(assistant_response_strs)
                        
                # Update conversation history
                conversation_history.append((user_input, assistant_response))
                
                # Keep only last N turns
                if len(conversation_history) > KEEP_LAST_N_TURNS:
                    conversation_history = conversation_history[-KEEP_LAST_N_TURNS:]
                
                turn_count += 1
                turns_since_reinit += 1
                
                # Update memory at intervals (non-blocking)
                if turn_count % MEMORY_UPDATE_INTERVAL == 0:
                    # Only send recent conversations to avoid redundancy
                    combined_conversation = ""
                    for user_msg, assistant_msg in conversation_history[-MEMORY_UPDATE_INTERVAL:]:
                        combined_conversation += f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
                    
                    # Send to Mirix (non-blocking - runs in background)
                    asyncio.create_task(asyncio.to_thread(
                        mirix_agent.add,
                        combined_conversation.strip(),
                        user_id=user.id
                    ))
                    print(f"💾 Memory update started in background. System prompt will be refreshed in {REINIT_INTERVAL - turns_since_reinit} turns.\n")
                
            except KeyboardInterrupt:
                print("\n👋 Goodbye!")
                break
            except Exception as e:
                print(f"❌ Error: {e}")
    
    finally:
        pass  # No cleanup needed with query() function

if __name__ == "__main__":
    asyncio.run(run_agent())
```

## Best Practices

### 1. Tune Update Intervals

Adjust based on your use case:
- **Frequent updates**: More current memory, higher API costs
- **Infrequent updates**: Lower costs, may miss context

### 2. Monitor Memory Quality

Periodically check what's being stored:
```python
memories = mirix_agent.get_user_memories(user.id)
print(memories)
```

### 3. Handle API Keys Securely

Always use environment variables:
```python
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
```

### 4. Error Handling

Wrap memory operations in try-except blocks:
```python
try:
    await asyncio.to_thread(mirix_agent.add, conversation, user_id=user.id)
except Exception as e:
    logging.error(f"Memory update failed: {e}")
```

## Performance Considerations

- **Memory Extraction**: O(log n) retrieval from vector store
- **Storage**: Asynchronous, doesn't block conversation flow
- **Buffer Size**: Keep `KEEP_LAST_N_TURNS` reasonable (50-100)
- **Model Choice**: Use `gemini-2.0-flash` for fast, cost-effective memory operations

## Conclusion

Integrating MIRIX into Claude Agent SDK is straightforward and provides significant benefits:

✅ **Persistent memory** across sessions  
✅ **Context-aware** responses  
✅ **User-specific** memory profiles  
✅ **Automatic memory** management  

With just a few additions to your existing Claude agent code, you can transform it into a truly intelligent assistant that remembers and learns from every interaction.

## Next Steps

- Explore [MIRIX documentation](https://docs.mirix.io)
- Try the [complete example on GitHub](https://github.com/Mirix-AI/MIRIX)
- Join our [community discussions](https://github.com/Mirix-AI/MIRIX/discussions)

---

*Ready to give your agents memory? [Get started with MIRIX today](https://docs.mirix.io)*

