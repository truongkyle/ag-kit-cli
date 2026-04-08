---
description: Automated workflow combining image analysis and prompt engineering to extract product details and generate cinematic Veo 3 video scripts with local voiceovers.
---

# Veo 3 Marketing Workflow (/veo-marketing)

## Description
An automated content creation workflow for TikTok and Shopee Video sellers. It heavily utilizes generative AI models, specifically Google's ecosystem (**Imagen 3** for high-fidelity images and **Veo 3** for cinematic motion and video environments). This workflow chains multiple specialized skills to elevate a raw product image into a complete, viral video script with a sales-oriented voiceover.

## Activated Skills
- `claudekit-ai-multimodal`: Visual analysis engine to extract texture, lighting, and geometric properties for exact material recreation.
- `prompt-engineering`: Scientific prompt structuring to seamlessly integrate the isolated product into commercial lifestyle environments.
- `mindrally-meta-prompt`: Acts as the AI director, constructing precise motion directives for the AI Video generator.

---

## Workflow Steps

### Step 1: Product Extraction & Consistency Locking
**Objective:** "Read" the product and create a standardized template to prevent distortion across subsequent generative steps.
**AI Procedure:**
1. Request the user to upload the original raw product image.
2. Utilize multimodal capabilities to conduct an in-depth analysis of the product's physical traits (e.g., leather texture, metallic reflections, accurate colors).
3. Package the analyzed data into a **"Consistency Lock Prompt"**. This prompt will serve as the core constraint for flat lay/studio background removal or when blending into any environment via Imagen 3.

### Step 2: Lookbook & Character Generation (First Frame)
**Objective:** Integrate the product into the hands of an AI character model within a commercial lighting context suited for the TikTok/Shopee demographic.
**AI Procedure:**
1. Propose 5 viral-worthy image concepts (still shots).
2. Draft 5 standardized **Image Prompts**. Example: *"A photorealistic portrait of a Vietnamese Gen-Z girl smiling brightly, holding [Consistency Lock Prompt from Step 1] in her hands. Shot on 35mm lens, golden hour studio lighting, aesthetic vibe..."*
3. The resulting image from this step will serve as the First Frame for the video generation model.

### Step 3: Director's Scripting & Veo 3 Prompt
**Objective:** Transform the static First Frame from Step 2 into cinematic motion via Veo 3, while simultaneously generating a lip-sync compatible sales audio script.
**AI Procedure:**
For the concept chosen by the user, the AI outputs a detailed implementation table:
- **Veo 3 Video Prompt (Cinematic Motion):** MUST BE IN ENGLISH for technical precision. Example: *"Smooth dolly-in. The character turns to the camera, actively speaking with expressive lip-syncing. Strict focus on [Product]. Photorealistic preservation, highly stable textures, 30fps."*
- **The Hook (First 3 Seconds):** Define a visual action paired with audio to maximize viewer retention (e.g., holding the product extremely close to the lens).
- **Lip-sync Voice Script:** MUST BE 100% IN VIETNAMESE, specifically written to target native Vietnamese shoppers. The 10-15s script should strictly follow this sales structure: Pain point -> Introduce product USP -> Pricing/Deal urgency -> Direct Call to Action (e.g., "Mấy bà ơi deal sốc góc trái màn hình...").
- **SFX/BGM Suggestions:** Recommend local Vietnamese TikTok trending music, pop-up graphics SFX, and whooshes.

---

## Agent Activation Hook
When the user runs the command `/veo-marketing`, the Agent must initiate the interaction with the following greeting:
*"Welcome to the Veo 3 & Imagen 3 Studio! Please upload your raw product image here and tell me your target audience (e.g., Luxury aesthetic, Office workers, or trendy Gen-Z). Let's start extracting the product details!"*
