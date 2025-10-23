Evaluating MIRIX system on more comprehensive and competive Benchmark

From MIRIX Team (Yuanzhe Hu, Yu Wang)


*Summary: This article introduces an evaluation of the MIRIX memory system on the comprehensive MemoryAgentBench, demonstrating that MIRIX's multi-agent framework significantly outperforms other RAG agents and, unlike them, shows substantial performance gains when paired with more powerful backbone models, highlighting its significant future potential.*


##  AI Agents Needs Memory

From the moment of their inception, Large Language Models (LLMs) have been constrained by their maximum context length. While this context window has expanded dramatically—from early limits of 2,048 tokens to over 1M today—it remains insufficient for many real-world applications. A 1M token context, for instance, barely covers ten full-length novels, and it often fails to capture the entirety of a complex codebase or retain a user's full conversation history from the past month. Furthermore, an LLM's effective processing capacity is often far lower than its stated maximum.

Given these limitations, equipping LLMs and AI Agents with long-term memory is not just an enhancement; it is a necessity. This is especially critical for complex, long-running tasks or for applications like personal memory assistants. Without a persistent memory mechanism, agents are prone to information decay, which fundamentally undermines their ability to plan and make accurate decisions.

To address this challenge, frameworks like MIRIX provide a robust solution for memory management. MIRIX introduces a comprehensive memory partitioning system, categorizing information into six distinct types: Core, Episodic, Semantic, Procedural, Resource Memory, and Knowledge Vault. It leverages a multi-agent framework to dynamically control and coordinate memory updates and retrieval. This architecture is designed to help agents persist, reason over, and accurately retrieve diverse, long-term user data at scale.

![MIRIX Memory Types](/blog/figures/mirix_memory_types.png)
*Figure 1: MIRIX's comprehensive memory partitioning system with six distinct memory types*


## The Evolution of Benchmarks for Memory Agents

In recent years, several benchmarks for Memory Agents have been proposed and have become widely used standards for testing. A prominent early example is LOCOMO. This benchmark features 10 conversations, with each conversation containing an average of 600 dialogues and 26,000 tokens. However, a token length of 26,000 is now considered somewhat outdated, especially given the long-context windows of modern LLMs, which range from 128K to 1M tokens.

More recently, the LongMemEval benchmark was proposed, which seeks to address this limitation by using synthetic long-form conversations. However, this benchmark's input scenarios focus primarily on historical dialogues between a user and an LLM—for example, a user asking the LLM for advice on a personal life problem. This benchmark is ultimately limited by its lack of topic diversity, incomplete evaluation dimensions, and unrealistic interaction methods. As a result, it cannot fully or comprehensively evaluate memory agent scenarios.

Recently, a more comprehensive benchmark for Memory Agents was introduced: MemoryAgentBench. In this benchmark, agents are presented with sequences of textual inputs that simulate multi-turn interactions with users. Furthermore, MemoryAgentBench draws on theories from memory and cognitive science to define four complementary competencies for evaluating memory agents:

(1) Accurate Retrieval (AR): The ability to extract the correct snippet in response to a query. This can involve one-hop or multi-hop retrieval, as long as the relevant information can be accessed with a single query.

(2) Test-Time Learning (TTL): The capacity to incorporate new behaviors or acquire new skills during deployment, without additional training.

(3) Long-Range Understanding (LRU): The ability to integrate information distributed across extended contexts (≥ 100k tokens) and answer questions requiring a global understanding of the entire sequence.

(4) Selective Forgetting (SF): The skill to revise, overwrite, or remove previously stored information when faced with contradictory evidence, aligning with goals in model editing and knowledge unlearning tasks.

Given the comprehensive nature of MemoryAgentBench, we used it to conduct a performance evaluation of our model, MIRIX.


![Four Competencies](/blog/figures/mab_four_aspects.png)
*Figure 3: Four complementary competencies for evaluating memory agents: Accurate Retrieval, Test-Time Learning, Long-Range Understanding, and Selective Forgetting*



![MemoryAgentBench Dataset Overview](/blog/figures/memory_agent_bench_dataset_overview.png)
*Figure 2: Overview of evaluation datasets in MemoryAgentBench covering various long-context capabilities*


## Results on MemoryAgentBench

In this section, we evaluate the performance of MIRIX on several subtasks within MemoryAgentBench and compare it against other methods. The primary methods included in the evaluation are Long-Context Agents, RAG agents, and Agentic Memory Agents. Furthermore, RAG Agents can be further split into Simple RAG Agents, Embedding-based RAG Agents, and Structure-Augmented RAG Agents.

![Overall Performance Comparison](/blog/figures/mab_main_table.png)
*Figure 4: Overall performance comparison across different agent types on MemoryAgentBench*

The overall results show that when using the newer backbone model, GPT-4.1-mini, the MIRIX method achieves an overall score of 63.0 on the Accurate Retrieval (AR) task and 40.5 on the Long-Range Understanding (LRU) task. It also obtained a total score of 37.7 across all four tasks. These evaluation scores demonstrate a significant lead over comparable open-source RAG agents and other Agentic Memory Agents.

![Backbone Model Ablation Study](/blog/figures/mab_ablation.png)
*Figure 5: Performance comparison across different backbone LLMs showing MIRIX's superior scalability with more powerful models*

Additionally, MemoryAgentBench also measures the impact of different backbone LLMs on agent performance. The ablation study indicates that for many RAG-based agents, upgrading the backbone model does not yield significant performance improvements. This is because memory agents that rely on information retrieval depend heavily on their retrieval mechanisms; once the backbone model responsible for processing the retrieved information is sufficiently powerful, further enhancements offer limited gains.

However, because MIRIX is based on a multi-agent memory framework, using a stronger backbone model for memory management can help it achieve substantial performance improvements. Therefore, looking ahead, if more powerful and efficient backbone models are applied to the MIRIX framework, the MIRIX method is expected to achieve even greater performance improvements. This underscores the significant future potential of Agentic Memory, both in terms of performance and practical application.