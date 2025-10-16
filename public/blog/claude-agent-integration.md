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
"""
Claude Code Agent with all standard tools
"""

import asyncio

from claude_agent_sdk import AssistantMessage, ClaudeAgentOptions, query
from dotenv import load_dotenv
+ from mirix import Mirix

load_dotenv()

# Configuration
+ MEMORY_UPDATE_INTERVAL = 3  # Update memory every N turns
+ REINIT_INTERVAL = 1  # Rebuild system prompt (retrieve from Mirix) every N turns
KEEP_LAST_N_TURNS = 50  # Keep last N turns in conversation history


- def build_system_prompt():
-     """Build system prompt
+ def build_system_prompt(mirix_agent=None, user_id=None, conversation_buffer=""):
+     """Build system prompt with optional Mirix memory context

+     Args:
+         mirix_agent: Mirix instance for memory extraction
+         user_id: User ID for memory retrieval
+         conversation_buffer: Recent conversation text for memory extraction context

    Returns:
-         str: System prompt
+         str: System prompt with memory context
    """
    # Base system prompt
    system_prompt = """You are a helpful assistant."""

+     # Add Mirix memory context if available
+     if mirix_agent and user_id and conversation_buffer:
+         memory_context = mirix_agent.extract_memory_for_system_prompt(
+             conversation_buffer, user_id
+         )
+         memory_context = memory_context
+         if memory_context:
+             system_prompt += "Relevant Memory Context:\n" + memory_context
+ 
    return system_prompt.replace("\n", "  ")


def get_agent_options(system_prompt, session_id=None):
    """Get ClaudeAgentOptions with the given system prompt

    Args:
        system_prompt: System prompt to use
        session_id: Optional session ID to resume

    Returns:
        ClaudeAgentOptions: Agent configuration
    """
    allowed_tools = [
        "Task",  # Launch specialized agents
        "Bash",  # Execute shell commands
        "Glob",  # File pattern matching
        "Grep",  # Search in files
        "ExitPlanMode",  # Exit planning mode
        "Read",  # Read files
        "Edit",  # Edit files
        "MultiEdit",  # Multiple edits in one file
        "Write",  # Write files
        "NotebookEdit",  # Edit Jupyter notebooks
        "WebFetch",  # Fetch web content
        "TodoWrite",  # Task management
        "WebSearch",  # Search the web
        "BashOutput",  # Get background bash output
        "KillBash",  # Kill background bash processes
    ]
    if session_id:
        return ClaudeAgentOptions(
            resume=session_id,
            # Include all standard Claude Code tools
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50,
        )

    else:
        return ClaudeAgentOptions(
            # Include all standard Claude Code tools
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50,
        )


async def run_agent():

+     import os
+     # Initialize Mirix memory agent
+     mirix_agent = Mirix(
+         model_name="gemini-2.0-flash",
+         api_key=os.getenv("GEMINI_API_KEY"),
+     )
+     user = mirix_agent.create_user(user_name="Alice")
+     turns_since_reinit = 0
+ 
    # Track conversation
    conversation_history = []
    turn_count = 0
    session_id = None

    try:
        while True:
            system_prompt = build_system_prompt()
            options = get_agent_options(system_prompt, session_id)

            try:
                user_input = input("User: ").strip()

                if user_input.lower() in ["exit", "quit", "bye"]:
                    print("👋 Goodbye!")
                    break

                if not user_input:
                    continue

+                 # Rebuild system prompt every REINIT_INTERVAL turns (expensive operation)
+                 if turns_since_reinit >= REINIT_INTERVAL:
+                     print(
+                         f"\n🔄 Rebuilding system prompt with latest Mirix memory (turn {turn_count})...",
+                         flush=True,
+                     )
+                     combined_conversation = ""
+                     for user_msg, assistant_msg in conversation_history:
+                         combined_conversation += (
+                             f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
+                         )
+ 
+                     system_prompt = build_system_prompt(
+                         mirix_agent=mirix_agent,
+                         user_id=user.id,
+                         conversation_buffer=combined_conversation,
+                     )
+                     options = get_agent_options(system_prompt, session_id)
+                     turns_since_reinit = 0
+ 
                print("Agent: ", end="", flush=True)

                assistant_message = None

                async for message in query(prompt=user_input, options=options):
                    # The first message is a system init message with the session ID
                    if hasattr(message, "subtype") and message.subtype == "init":
                        session_id = message.data.get("session_id")
                        print(f"Session started with ID: {session_id}")
                        # You can save this ID for later resumption

                    if hasattr(message, "content"):
                        for block in message.content:
                            if hasattr(block, "text"):
                                print(block.text, end="\n", flush=True)

                    if isinstance(message, AssistantMessage):
                        assistant_message = message

                assistant_response_strs = []
                for block in assistant_message.content:
                    if hasattr(block, "text"):
                        assistant_response_strs.append(block.text)
                assistant_response = "\n".join(assistant_response_strs)

                # Update conversation history
                conversation_history.append((user_input, assistant_response))
                # Keep only last N turns
                if len(conversation_history) > KEEP_LAST_N_TURNS:
                    conversation_history = conversation_history[-KEEP_LAST_N_TURNS:]
                turn_count += 1
+                 turns_since_reinit += 1
+ 
+                 # Update memory at intervals
+                 if turn_count % MEMORY_UPDATE_INTERVAL == 0:
+                     print(f"\n💾 Updating memory (turn {turn_count})...", flush=True)
+ 
+                     # Combine recent conversations for Mirix
+                     combined_conversation = ""
+                     for user_msg, assistant_msg in conversation_history[
+                         -MEMORY_UPDATE_INTERVAL:
+                     ]:
+                         combined_conversation += (
+                             f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
+                         )
+ 
+                     # Send to Mirix (non-blocking - runs in background)
+                     asyncio.create_task(
+                         asyncio.to_thread(
+                             mirix_agent.add,
+                             combined_conversation.strip(),
+                             user_id=user.id,
+                         )
+                     )
+                     print(
+                         f"💾 Memory update started in background. System prompt will be refreshed in {REINIT_INTERVAL - turns_since_reinit} turns.\n"
+                     )

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

### Key Changes Summary

**🟢 What MIRIX Adds:**

1. **Import Mirix** - Add `from mirix import Mirix` to imports
2. **Memory Configuration** - Add `MEMORY_UPDATE_INTERVAL` and `REINIT_INTERVAL` constants
3. **Enhanced System Prompt Builder** - Extend `build_system_prompt()` to optionally extract and inject memory context
4. **Memory Initialization** - Create MIRIX instance with Gemini model and user profile  
5. **Turn Tracking** - Add `turns_since_reinit` to track when to rebuild system prompt
6. **Dynamic System Prompts** - Rebuild system prompt with memory context every `REINIT_INTERVAL` turns
7. **Background Memory Updates** - Save conversations to MIRIX every `MEMORY_UPDATE_INTERVAL` turns using non-blocking `asyncio.create_task()`
8. **Better Error Handling** - Add traceback printing for debugging

**The core difference:** The original agent has no memory persistence. With MIRIX, the agent periodically saves conversations to memory and retrieves relevant context to inject into the system prompt, creating a stateful experience across sessions.

## Step-by-Step Integration Guide

### 1. Install Dependencies

```bash
pip install mirix claude-agent-sdk
```

### 2. Complete Integration Code

Here's the complete code to integrate MIRIX into your Claude agent:


```python
#!/usr/bin/env python3
"""
Claude Code Agent with all standard tools
"""

import asyncio

from claude_agent_sdk import AssistantMessage, ClaudeAgentOptions, query
from dotenv import load_dotenv

from mirix import Mirix

load_dotenv()

# Configuration
MEMORY_UPDATE_INTERVAL = 3  # Update memory every N turns
REINIT_INTERVAL = 1  # Rebuild system prompt (retrieve from Mirix) every N turns
KEEP_LAST_N_TURNS = 50  # Keep last N turns in memory buffer for Mirix


def build_system_prompt(mirix_agent=None, user_id=None, conversation_buffer=""):
    """Build system prompt with optional Mirix memory context

    Args:
        mirix_agent: Mirix instance for memory extraction
        user_id: User ID for memory retrieval
        conversation_buffer: Recent conversation text for memory extraction context

    Returns:
        str: System prompt with memory context
    """
    # Base system prompt
    system_prompt = """You are a helpful assistant."""

    # Add Mirix memory context if available
    if mirix_agent and user_id and conversation_buffer:
        memory_context = mirix_agent.extract_memory_for_system_prompt(
            conversation_buffer, user_id
        )
        memory_context = memory_context
        if memory_context:
            system_prompt += "Relevant Memory Context:\n" + memory_context

    return system_prompt.replace("\n", "  ")


def get_agent_options(system_prompt, session_id=None):
    """Get ClaudeAgentOptions with the given system prompt

    Args:
        system_prompt: System prompt to use
        session_id: Optional session ID to resume

    Returns:
        ClaudeAgentOptions: Agent configuration
    """
    allowed_tools = [
        "Task",  # Launch specialized agents
        "Bash",  # Execute shell commands
        "Glob",  # File pattern matching
        "Grep",  # Search in files
        "ExitPlanMode",  # Exit planning mode
        "Read",  # Read files
        "Edit",  # Edit files
        "MultiEdit",  # Multiple edits in one file
        "Write",  # Write files
        "NotebookEdit",  # Edit Jupyter notebooks
        "WebFetch",  # Fetch web content
        "TodoWrite",  # Task management
        "WebSearch",  # Search the web
        "BashOutput",  # Get background bash output
        "KillBash",  # Kill background bash processes
    ]
    if session_id:
        return ClaudeAgentOptions(
            resume=session_id,
            # Include all standard Claude Code tools
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50,
        )

    else:
        return ClaudeAgentOptions(
            # Include all standard Claude Code tools
            allowed_tools=allowed_tools,
            system_prompt=system_prompt,
            model="claude-sonnet-4-5",
            max_turns=50,
        )


async def run_agent():

    import os
    # Initialize Mirix memory agent
    mirix_agent = Mirix(
        model_name="gemini-2.0-flash",
        api_key=os.getenv("GEMINI_API_KEY"),
    )
    user = mirix_agent.create_user(user_name="Alice")
    turns_since_reinit = 0

    # Track conversation
    conversation_history = []
    turn_count = 0
    session_id = None

    try:
        while True:
            system_prompt = build_system_prompt()
            options = get_agent_options(system_prompt, session_id)

            try:
                user_input = input("User: ").strip()

                if user_input.lower() in ["exit", "quit", "bye"]:
                    print("👋 Goodbye!")
                    break

                if not user_input:
                    continue

                # Rebuild system prompt every REINIT_INTERVAL turns (expensive operation)
                if turns_since_reinit >= REINIT_INTERVAL:
                    print(
                        f"\n🔄 Rebuilding system prompt with latest Mirix memory (turn {turn_count})...",
                        flush=True,
                    )
                    combined_conversation = ""
                    for user_msg, assistant_msg in conversation_history:
                        combined_conversation += (
                            f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
                        )

                    system_prompt = build_system_prompt(
                        mirix_agent=mirix_agent,
                        user_id=user.id,
                        conversation_buffer=combined_conversation,
                    )
                    options = get_agent_options(system_prompt, session_id)
                    turns_since_reinit = 0

                print("Agent: ", end="", flush=True)

                assistant_message = None

                async for message in query(prompt=user_input, options=options):
                    # The first message is a system init message with the session ID
                    if hasattr(message, "subtype") and message.subtype == "init":
                        session_id = message.data.get("session_id")
                        print(f"Session started with ID: {session_id}")
                        # You can save this ID for later resumption

                    if hasattr(message, "content"):
                        for block in message.content:
                            if hasattr(block, "text"):
                                print(block.text, end="\n", flush=True)

                    if isinstance(message, AssistantMessage):
                        assistant_message = message

                assistant_response_strs = []
                for block in assistant_message.content:
                    if hasattr(block, "text"):
                        assistant_response_strs.append(block.text)
                assistant_response = "\n".join(assistant_response_strs)

                # Update conversation history
                conversation_history.append((user_input, assistant_response))
                # Keep only last N turns
                if len(conversation_history) > KEEP_LAST_N_TURNS:
                    conversation_history = conversation_history[-KEEP_LAST_N_TURNS:]
                turn_count += 1
                turns_since_reinit += 1

                # Update memory at intervals
                if turn_count % MEMORY_UPDATE_INTERVAL == 0:
                    print(f"\n💾 Updating memory (turn {turn_count})...", flush=True)

                    # Combine recent conversations for Mirix
                    combined_conversation = ""
                    for user_msg, assistant_msg in conversation_history[
                        -MEMORY_UPDATE_INTERVAL:
                    ]:
                        combined_conversation += (
                            f"[User] {user_msg}\n\n[Assistant] {assistant_msg}\n\n"
                        )

                    # Send to Mirix (non-blocking - runs in background)
                    asyncio.create_task(
                        asyncio.to_thread(
                            mirix_agent.add,
                            combined_conversation.strip(),
                            user_id=user.id,
                        )
                    )
                    print(
                        f"💾 Memory update started in background. System prompt will be refreshed in {REINIT_INTERVAL - turns_since_reinit} turns.\n"
                    )

            except KeyboardInterrupt:
                print("\n👋 Goodbye!")
                break
            except Exception as e:
                print(f"❌ Error: {e}")
                import traceback

                traceback.print_exc()

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

