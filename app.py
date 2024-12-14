
import gradio as gr
from transformers import pipeline

generator = pipeline("text-generation", model="mistralai/Mixtral-8x22B-Instruct-v0.1")

def generate_recipe(ingredients):
    input_text = f"I have {ingredients}. Please give me a recipe you'd recommend I make!"
    result = generator(input_text, max_length=1024)[0]["generated_text"]
    return result

# Interface for Gradio
gr.Interface(
    fn=generate_recipe, 
    inputs="text", 
    outputs="text", 
    title="Recipe Generator"
).launch()