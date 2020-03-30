import React from "react";

function Form() {
  const [data, setFormData] = React.useState({});

  const handleChange = event => {
    setFormData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch("https://post-a-form.herokuapp.com/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        if (res.err) {
          alert(res.err);
        } else {
          alert(`Movie #${res.id} has been successfully added!`);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label forhtml="moviesName">Name of The Movie:</label>
      <br />
      <input
        type="text"
        required
        placeholder="type your movie here"
        name="title"
        onChange={handleChange}
      />
      <br />
      <label forhtml="poster">Poster Url:</label>
      <br />
      <input
        type="text"
        required
        placeholder="Put your url here"
        name="poster"
        onChange={handleChange}
      />
      <br />
      <label forhtml="comment">Comment about the movie:</label>
      <br />
      <textarea
        type="text-area"
        required
        width="300px"
        height="300px"
        placeholder="Did you like this movie? Tell us a bit more about ir"
        name="comment"
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Subscribe!" />
    </form>
  );
}

export default Form;
