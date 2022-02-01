import React from 'react';
import styled from 'styled-components';
import Essay from './Essay.jsx';


const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays </h2>
            <Essay q='S2. What is the difference between Git, Github, and Heroku?'>
               <p>Version control allows developers to track and manage changes to a software project’s code. As a software project grows, version control becomes essential. Take for example a website for this class. If different students were working on different parts of the website, it wouldn’t be safe or efficient to have them directly edit the “official” source code. Instead, version control allows teammates to work safely through branching and merging. With branching, a developer duplicates part of the source code (called the repository). The developer can then safely make changes to that part of the code without affecting the rest of the project.</p>
               <p>Git is a specific open-source version control system created by Linus Torvald in 2005. It is a distributed version control system which means the entire codebase and history is available on every developer’s computer – allowing for easy branching and merging. In addition to being distributed, Git has been designed with performance, security, and flexibility in mind.</p>
               <p>Github is a for-profit company that offers a cloud-based Git repository hosting service. It makes it a lot easier for individuals and teams to use Git for version control and collaboration. Github’s interface is user-friendly enough so that even novice coders can take advantage of Git. On Github, anyone can sign up and has a public code repository for free.
</p>
               <p>Heroku is a cloud platform that lets developers build, deliver, and monitor simple applications without the need to install in-house hardware and software. It is known for running apps in dynos - which are virtual computers which can be powered up or down based on how big your application is. Heroku then charges you by the dyno. </p>
               <p>Heroku was built by developers for developers, so the experience is easy to navigate. It is open and extensible so developers can build in whatever language they choose (Nodejs, Ruby, PHP, Python, or Java). Heroku also has a huge network of Add-on features and functionalities that can be deployed with the click of a button. Some of these are free and other are paid, but they can shave hours off a project.</p>
            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS, and JS.'>
                <p>While HTML, CSS, and Javascript are all programming languages that critical for instructing web browsers what to do, each plays a different role in running a fully functioning website. < /p>
                <p>Every website begins with content. HTML stands for HyperText Markup Language and uses tags to identify the different types of elements on a website and their specific function. Each type of content is “wrapped” by opening and closing HTML tags. By labeling each element on a website, CSS and Javascript can now instruct the browser on how these elements should look and behave based on different devices and the user’s actions.< /p>
                <p>CSS stands for Cascading Style Sheets. This is the language that dictates the presentation and layout of a website’s content. CSS is a list of rules that assigns different properties such as fonts, sizes, colors, and positions of the HTML tagged elements. CSS properties can be applied to single tags, multiple tags, an entire page, or multiple pages. It also allows the content presentation to adapt to different screen sizes and types of devices.< /p>
                <p>JS, or JavaScript, provides instructions for how elements on the website or app should behave based on the user’s input or actions. It allows for interactive features such as pop-up boxes, online forms, animations, and special effects. Javascript is supported by all modern web browsers and allows websites and apps to be functional, responsive, and engaging.< /p>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page websites?'>
                <p>Multiple-page applications work in a “traditional” way. When you type in a URL, your browser sends the request, and the web server sends you the homepage for that site. Every time you send a request (like navigating to another page or doing a search) the web server sends the content back to you over the internet. This results in re-loading and waiting for pages to re-fresh.</p>
                <p>In a single page application, when you first come to the website, your browser downloads a small program in Javascript. Your browser saves the application and starts to run it. It is a complete application, as if you had installed a smaller application on your computer, except that this is in your browser. </p>
                <p>Once it is running, you don’t need to reload that page anymore. That little javascript program is going to control everything on your screen. If it needs to, it will communicate to the web server and get the information you need without reloading the page. That’s why it’s called a single page application - there’s no need to refresh the page, it just loads one time. That saves a lot of bandwidth and time. It’s a much faster and more fluid experience, but it is more difficult to build.</p>
            </Essay>

            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <p>A web designer is a graphic artist who is responsible for how a website is used, its layout, and visual appearance. A web designer’s goal is to make a site user friendly, visually appealing and encourages visitors to stay on the site of as long as possible. Different types of web designers focus on different aspect of the web experience. These are: User Experience (UX), User Interface (UI) and Visual Design.</p>
                <p>Front End Web Developers take the concepts laid out by web designers and turn them into real fully-functioning websites. Front end web developers build core structure of the website using coding and programming languages. This includes building its user-facing features as well as configuring the server and databases on the back end. </p>
                <p>Back End Web Developers use advanced programming languages like SQL, Ruby, Java, C#, and PHP. They mainly work on the server-side aspects of the website that are happening behind the scenes - those that visitors don’t see on the front end. </p>
            </Essay>

        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
background-color: white;
padding: 20px;
`;