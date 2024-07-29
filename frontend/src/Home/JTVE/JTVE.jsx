import React from 'react';

// Define the content in the same file
const journalContent = {
  overview: {
    title: 'Journal Overview',
    text: `The Journal of Technical and Vocational Education (JTVE) published by the National Institute of Technical Teachers Training and Research (NITTTR) Chennai India is a leading platform for scholarship in the field of Technical and Vocational Education and Training (TVET) practices.

    JTVE promotes the dissemination of high-quality research and critical analysis on technical and vocational education and training (TVET) practices. We welcome submissions from both local and international researchers and practitioners who share a commitment to improving TVET pedagogy curriculum development and overall effectiveness.

    The journal publishes a wide range of scholarly content including:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Research articles on innovative teaching methods, curriculum design, assessment strategies, and the impact of TVET on employability.</li>
      <li>Critical reviews of existing TVET literature and policy.</li>
      <li>Technical reports that share best practices and emerging trends in TVET.</li>
    </ul>
    JTVE is committed to fostering a vibrant dialogue on the future of TVET. We encourage submissions that address the evolving needs of the workforce and contribute to the development of a skilled and adaptable workforce.`,
  },
  about: {
    title: 'About this Journal',
    text: `Bibliographic Information
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>ISSN: 0971-8508</li>
      <li>Open Access: The JTVE journal recognizes the importance of making valuable research on Technical and Vocational Education (TVET) openly accessible to a global audience. We are committed to exploring and implementing sustainable Open Access models that promote wider dissemination and knowledge sharing within the TVET community.</li>
    </ul>
    Current Open Access Options: At present JTVE offers a traditional subscription-based access model. However, authors can choose to make their individual articles Open Access upon publication by covering an Article Processing Charge (APC). This fee will help defray the costs associated with peer review, editing, production, and journal management while still making the research available to a wider readership.

    Benefits of Open Access for Authors:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Increased Visibility and Readership: Your research reaches a broader audience of researchers, practitioners, and policymakers interested in TVET, potentially leading to higher citation rates and a stronger academic profile.</li>
      <li>Global Collaboration: Open Access fosters international research collaboration and knowledge exchange within the TVET field.</li>
      <li>Enhanced Discoverability: Open Access articles are more easily discoverable through search engines and online databases, maximizing the impact of your research.</li>
    </ul>
    Future of Open Access at JTVE: The JTVE editorial team is actively exploring alternative Open Access models that are financially sustainable and ensure the long-term viability of the journal. We are committed to continuously improving our Open Access options to better serve the needs of the TVET research community. Please note that JTVE's Open Access policy is subject to change. We will keep authors informed of any updates or developments.

    Contact: Enquiries should be directed to the Editor via the email address: jtve@nitttrc.edu.in`,
  },
  editorialBoard: {
    title: 'Editorial Board',
    text: `Editor: Dr. K.N. Shoba, Associate Professor, Department of Education, NITTTR Chennai
    <p>Associate Editors:</p>
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Dr. G.A. Rathy, Professor, DEE&CE, NITTTR Chennai</li>
      <li>Dr. M. Anilkumar, Associate Professor, CRED, NITTTR Chennai</li>
      <li>Dr. E. Balasubramanian, Associate Professor, DME, NITTTR Chennai</li>
      <li>Dr. T. Subha, Associate Professor, DEMT, NITTTR Chennai</li>
    </ul>`,
  },
  peerReview: {
    title: 'Peer Review Process',
    text: `In the JTVE journal, committed to advancing TVET scholarship, a rigorous peer review process ensures the quality and relevance of published research. Anonymous reviewers, experts in technical and vocational education, evaluate submitted articles. They assess originality, research methods, data validity, and the contribution to the field of TVET. Based on their feedback, the editor decides to publish the article with revisions, request further review, or reject it. This process upholds JTVE's reputation for publishing impactful research that improves TVET practices.`,
  },
  publicationEthics: {
    title: 'Publication Ethics',
    text: `Upholding ethical standards is paramount at the JTVE journal. Authors are expected to ensure originality, proper citation of sources, and avoid plagiarism. Transparency in research design and data analysis is crucial. Authorship should reflect substantial contributions. Conflicts of interest must be disclosed. The JTVE team is committed to ethical research practices, safeguarding the integrity of published work that informs advancements in TVET.`,
  },
  abstractingIndexing: {
    title: 'Abstracting and Indexing',
    text: `The JTVE journal understands the importance of making your valuable research on Technical and Vocational Education (TVET) discoverable by a wide audience. To achieve this, we ensure our published articles are abstracted and indexed in reputable databases.

    Benefits of JTVE Abstracting and Indexing:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Increased Visibility: Your work reaches a broader audience of researchers, practitioners, and policymakers interested in TVET.</li>
      <li>Enhanced Discoverability: Abstracting and indexing services make your research easily searchable through relevant keywords and subject areas.</li>
      <li>Potential for Higher Citation Rates: Increased exposure can lead to more citations of your work, which can strengthen your academic profile.</li>
    </ul>
    JTVE's Commitment: The JTVE editorial team actively seeks to include the journal in prestigious abstracting and indexing databases relevant to TVET research. We will keep you informed of any developments in this regard.

    JTVE articles are abstracted and indexed in reputable databases to maximize discoverability by a wide audience of researchers, practitioners, and policymakers interested in TVET.

    We encourage you to submit your high-quality research on TVET to JTVE and contribute to shaping the future of vocational education.`,
  },
  recommendations: {
    title: 'Recommendations for Authors',
    text: `To maximize the discoverability of your research in JTVE:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Use clear and concise language in your title and abstract.</li>
      <li>Include relevant keywords throughout your article.</li>
      <li>Ensure your research aligns with the journal's scope and focus on TVET.</li>
    </ul>`,
  },
  articleProcessing: {
    title: 'Article Processing Charges: NIL',
    text: `JTVE Journal: Instructions for Authors

    The Journal of Technical and Vocational Education (JTVE) welcomes submissions from both local and international researchers and practitioners engaged in advancing the field of TVET. We publish high-quality original research that contributes to a better understanding of TVET practices, curriculum development, and overall effectiveness.

    Manuscript Submission:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Submit your manuscript electronically through our online submission system ([link to online submission system if available]). Email the same to jtve@nitttrc.edu.in</li>
      <li>Ensure your manuscript adheres to the JTVE style guide / template (available on the website).</li>
      <li>Include the following with your submission:</li>
      <li>Title page with author information (affiliation, email address)</li>
      <li>Abstract (150-200 words) summarizing key findings</li>
      <li>3-5 keywords relevant to your research</li>
      <li>Main text (excluding references)</li>
      <li>References section formatted according to the JTVE style guide</li>
      <li>Tables and figures (with clear captions and titles)</li>
    </ul>

    Peer Review Process: JTVE employs a rigorous double-blind peer review process. Anonymous experts in TVET evaluate submitted articles based on:
    <ul style="list-style-type: disc; margin-left: 20px; padding:10px;">
      <li>Originality and significance of the research question</li>
      <li>Soundness of research methodology and data analysis</li>
      <li>Clarity and conciseness of writing</li>
      <li>Contribution to the advancement of TVET knowledge</li>
    </ul>

    Following the review process, the editor will decide to publish the article with revisions, request further review, or reject it. Authors will receive detailed feedback from reviewers to guide potential revisions.`,
  },
};

const Section = ({ title, content }) => {
  return (
    <div>
      <h1 className='text-2xl py-5'>{title}</h1>
      <div  className='p-2' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const JTVE = () => {
  return (
    <div className='text-black'>
      <h1 className='-mt-[38px] p-10 bg-blue-600 text-white text-center text-4xl font-bold'>
        Journal of Technical and Vocational Education
      </h1>
      <div className='w-[60%] my-20 mx-auto shadow-md shadow-gray-600 rounded-xl p-10'>
        {Object.entries(journalContent).map(([key, { title, text }]) => (
          <Section key={key} title={title} content={text} />
        ))}
      </div>
    </div>
  );
};

export default JTVE;
