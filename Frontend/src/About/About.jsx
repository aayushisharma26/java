import './About.css';

function About() {
  const Data = [
    {
      name: "Alima",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR9Vp8YkY6RbpqOgyr--sUGkf9I6XvFYbPw&s",
      about: "Alima is a highly skilled Full-Stack Developer who excels at crafting seamless and interactive user interfaces. She is proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with expertise in building scalable and responsive web applications."
    },
    {

     

      name: "Aayushi",

      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAgVBMVEX///8AAACHh4f09PTw8PDs7OyPj4/o6Oj5+fn7+/uysrLe3t6+vr6oqKjl5eVOTk7Nzc2cnJx1dXWlpaXExMTY2NhmZmZdXV05OTl/f3+Li4tsbGzg4OCVlZXHx8dVVVUeHh4MDAwvLy82NjYpKSlCQkIiIiJKSkpxcXEVFRW3t7e7ve8XAAAIDUlEQVR4nO2d2YKiOhBALRaVVRbZVARRVPz/D7xhEYKCbTvmonSdh2llmKQNldrjTCYIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDIl7MNVYajhzrDwYdH9GABFrPhL2AzG/sDkAG0CQ9zVuPvYcpq6A+AA5DJD5gxGl8BUBgNPTxzD8AgPx1gNYMJHquhB4c/las30WJWU6SwZTX00PALgGXxymJmOsBnNfLQCET2Ko9lLzOaw4CQ0chDw6el1SDMme0wEy6MRh4YKQIwq9cGM8sRAc9q6GFZQ7OvzB2rWeDIauRhCQCC+o3lMppFgTOjkYclBGiWjD9ojKaRgdXIg0IitVSo3wnMLMdqlF4fiaQyKkrbgshoIo9dLD0c8wOAQ70PY0YT8cDMpA+IC21v7MwqLNWBlU0aEBvaOaS5b/bd+o9cRmg5lgCn1gW9TBswYAUs09iDIGSQtfW5wywjt4bRJeo9gE37inmQ2EzFJ6OzHGadJ6hxF4zmEm+0xPej7O6qQlLKMZrMGF2ZYwGn2xSIzky/a2OzHHbbXy54o+XgOY+OX4LHJt34tohkBh1FVy17V8i2IZqBXhJv92hkA1i5m6xYdJW9rHdZjnnSfji8nzy6Xfu25SMOs3B/9fSulJwKbRukw8MHI3yZXZGudbUW8+O7hMC68fKUcZWJAlh3XFXeFrKdb4ZXR2V4Fegs2xhvC6ysqP0+ZBZLD4HX3eqkHd5VC9PoxyPlebFN/809fKwvc+mJoNyo8/ILiE04OHNXk0n08MEo91ZM1Pafut35/b3DXJAEnZdfYV01ZPBcquYzPop47bvQWwnA6/4VP4AprDqvz9+X0eSj8gkZSeHA6Lv+JLZ4BmileeZyBOePXbzJbLfvVitKX8gm0opL1KbEwNjV59PXXUpNhqBw/MLKPXKgV65t8FtegDAFmLIqV/07guOCK9u2bRI4CtO2QKXFoK4rhlRiS/UAIp186NJD1KGjMicuyKpxMJmnWbW2Tl9XrrEH1aGcGsOF5GM7YQQzhR+I6kW7XL2YM0R+ZUg1KLeVWEV8AnSIlQ2elK/Yqok0tqXfYvjtetEmytNY2tWpmZlkOFatrf+Ona+PT2L5aRiatiZftobi5IiKYmwv6t4PA/d03UkhXH9eiENIxEiS60aioIz4JD+98+eEqBLVlNqTZq4J52uI95QDI3DgbYq/zJ/NTE7B+1jBm+ROcWIqktrfOR8Xav66f6tmFzn/5AJZErLPppWDwVfFTTfibhuKLpCWC+TQQbVFJNmIiWWya5uvT+GoVr+XbXAJLLTPbsBawoKYBr/fgW2lPfi4+HDbUjHtLAvOtZazS8EM9sJNpkRcX1MFDliUvlskggmumG/U0jo5ATEQ1wcVJjvP/NxNe8XMIOL6Y/dNKy6dFcLjVL5MAvsmxSClRYJkGs8u7ShvGR+qvewQ5Rg1zkqaRJlcXpd50ZmeIFtR68V/rqWlEbUEgOtIVBUsW3Jpp+QPPSs8RNEDl/J1hOLG4KhMAnrvCgFY1f5zYCGRbV/vRuKbVLOe4QiwW8h9v8RnExIvC4Jun1Ru9fB4ZFvOssKuEqWZ0ek7mSyatE42EymjRPmyq6VXB1/K5beeR2v88a2mGt8hbPfwkE30cAeLrnjSjCmvT8wM4kYX1sMkDsieXr5VOtGTdJ77L7Wbw6/BvUoUv4+LnRl/WQr5R1alU7Ekvq95F3mc6ISBDqpdrl6Qh3itPKoJXGkhNGguUenXdeXNeOxOxw2CDteKA28S9+/G2LWMighVv7NXOCmtaFjf++W2DCvVpwIdRdcd9NOR9VRZdIZ+S+xBK8ZtOyHOtFgit/gns67Ufi6Yk9ybjsGitJlSRxaa/7Epu1dwoJ3P25xpCeS78i3l6hHj0antNZgurQysVuTh1+5ymHy2I/xL3LsIy1hAeLUXm458OlcFYHL3kYz8FOFi2tYBapNesPwxLZ/RVR7SwK92cEdXs31Vh8GhZxtu7oojSVy/9Ed1gHLRmWMW01rCbv/KqIu1flddrpNto0F5YNVvNATLvlzBumx+Mm+XT2wSTs9XaakCrzaq6prf2/4TFmJi3p6Z8uso5PnGK4kqQsXHERletT9fTrzp1X1/C9cIT4/l6EBoDIc9ql7wpKun5UpAPvVNjECfvrUOz86yreV0NqrDz7c9O22kCAS/1abDH6hP/7wNWNaJ93hUreCHR8KXy0rQbg9aUWbaeb5BRaxuNeJR2Q21p7Rbw7W7JR1a4MJfNMXv84htw8FhTKs32T8WviJFQGt6L6buP/6id8MB14pgx40p3vhB8xV4dKeEQYui8SsTKoZRcPnWfGgP6c+eR0gfDVzQHT0BMDoq8y0snzCdMnVaudUUMGP4nWDfweknzTfJl6xR9i4trFxPO9afoTfapdlSGo4OUHR4W9Pfl+I+c9jl0pyaUmmfbf3XhU95Sn605q4VVbF8SnJHjfVUAGBCfH15aEo8s/g4Mifkt2yeOwoaNl/VQCULvLF+79TTTLurZPe3xdeXTcI4GFXC+BX4Q/rUfefG16tfBY+PUv0FtLu29W7kxm+JK5FbQzqifPFrJMdfNzNpRc1tGXce3PpbvHQI3gOO28Goku0v4r70nVSam67tUeWcXoN/dQP+8SRLxbhqrf87WYJi9Drf9xULH8V5rF9W+//gjfo/eEAQBEEQBEEQ5B38BzdJV6+dzi3LAAAAAElFTkSuQmCC",
      about: "Aayushi is a talented Designer and Developer with expertise in Front-End Technologies and the MERN Stack (MongoDB, Express.js, React.js, Node.js). She is skilled in HTML, CSS, JavaScript, React.js, UI/UX Design, Responsive Web Development, and API Integration, creating visually appealing and high-performing web applications."
    },
    {
      name: "Radha",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpY5lXHJSnN2C1KwmcmnYlz78LTz28_-Dbw&s",
      about: "Radha specializes in Front-End Development, crafting dynamic and user-friendly web experiences. She is skilled in HTML, CSS, JavaScript, React.js, UI/UX Design, Responsive Web Development, and API Integration, ensuring seamless performance and visually engaging interfaces."
    },
    {
      name: "Nasrina",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOEN1oDN--jWiuSIiQhJBC4C5uOGOg84Llg&s",
      about: "Nasrina specializes in Frontend Development with a strong foundation in C programming. She is proficient in HTML, CSS, JavaScript, React.js, and Bootstrap, with experience in building dynamic and responsive web applications."
    }
  ];

  return (
    <div id="container2">
      <section>
        <div id="container1">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
            alt="Learning Banner"
            id="image"
          />
          <div id="title">
            <p id="title-text">Our mission is to provide a free, world-class education for anyone, anywhere.</p>
          </div>
          <div id="content">
            <h1 id="heading">A personalized learning resource for all ages</h1>
            <p>
              Welcome to e-learning, your ultimate destination for mastering coding skills online. 
              Our mission is to empower aspiring developers with accessible and affordable coding courses in various programming languages.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <div id="content5">
          <h1>Our Team</h1>
          <div id="team-list">
            {Data.map((d, index) => (
              <div key={index} className="team-member">
                <img src={d.img} alt={d.name} className="team-img" />
                <p className="team-name">{d.name}</p>
                <p className="team-about">{d.about}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
          <div id="content5">
            <h1>Latest News</h1>
            <p>Get our latest courses, trends, and techniques used in learning.</p>
            <div id="news">
              <div id="div1">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-1.jpg" alt="Connect Between Self-Portraits and identity." />
                <a href="https://victorthemes.com/themes/rouen/connection-between-self-portraits-and-identity/"><p>Connect Between Self-Portraits and identity.</p></a>
                <div id="icon">
                  <img id='photo1' src="https://secure.gravatar.com/avatar/dc1427ca90db1152ccec33b95a63eb15?s=96&a" />
                  <span>Antony Wills</span>
                </div>
              </div>
              <div id="div2">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-2.jpg" />
                <a href="https://victorthemes.com/themes/rouen/i-turned-a-challenge-into-a-positive-thing/"><p>I Turned A Challenge Into A Positive Thing</p></a>
                <div id="icon">
                  <img className="img1"  id='photo2' src="https://secure.gravatar.com/avatar/b0fafc9680625bd3318db833d8427df8?s=96&d=mm&r=g" />
                  <span>Jhon Florance</span>
                </div>
              </div>
              <div id="div3">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-4.jpg" alt="" />
                <a href="https://victorthemes.com/themes/rouen/choose-the-right-place-at-the-right-time/"><p>Choose The Right Place, At The Right Time</p></a>
                <div id="icon">
                  <img   id='photo3' src="https://secure.gravatar.com/avatar/dc1427ca90db1152ccec33b95a63eb15?s=96&a" />
                  <span>Antony Wills</span>
                </div>
              </div>
            </div>
          </div>
       </section>

    </div>
  );
}

export default About;