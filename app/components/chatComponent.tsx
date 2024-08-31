"use client";
import { useChat, Message } from "ai/react";
import { useState } from "react";

// Define predefined history questions
const predefinedQuestions = [
    "What is the history of the Roman Empire?",
    "Who was the first President of the United States?",
    "What caused the fall of the Berlin Wall?",
    "What was the significance of the Battle of Hastings?",
    "Who were the main figures in the French Revolution?",
    "What led to the start of World War I?",
    "What was the impact of the Industrial Revolution?",
    "How did the Cold War affect global politics?",
    "What was the role of the United Nations in the 20th century?",
    "What were the causes and effects of the Great Depression?",
];

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

    // Handle question click
    const handleQuestionClick = (question: string) => {
        setSelectedQuestion(question);
        handleInputChange({ target: { value: question } }); // Update input
        handleSubmit(); // Submit the question
    };

    return (
        <div>
            <div className="mb-4">
                {/* Render predefined questions */}
                <h2 className="text-xl font-bold mb-2">Predefined Questions</h2>
                <ul>
                    {predefinedQuestions.map((question, index) => (
                        <li key={index}>
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => handleQuestionClick(question)}
                            >
                                {question}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Display chat messages */}
            {messages.map((message: Message) => {
                return (
                    <div key={message.id}>
                        {message.role === "assistant" ? (
                            <h3 className="text-lg font-semibold mt-2">Chat Bot</h3>
                        ) : (
                            <h3 className="text-lg font-semibold mt-2">User</h3>
                        )}

                        {message.content.split("\n").map((currentTextBlock: string, index: number) => {
                            if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;</p>;
                            } else {
                                return <p key={message.id + index}>{currentTextBlock}</p>;
                            }
                        })}
                    </div>
                );
            })}

            <div>
                <h3 className="text-lg font-semibold mt-2">Chat Bot</h3>
                <p>I am a History Related Bot</p>
            </div>

            {/* User message input */}
            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-slate-600 p-2"
                    placeholder={"What is History?"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-blue-600 p-2 mt-2" type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}
