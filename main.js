const Name = document.getElementById("name");
const btn = document.getElementById("btn");
console.log(Name, btn);

const getData = async (url) => {
  const result = await axios.get(url);
  console.log("LN 7", result);
  return result;
};

btn.onclick = async () => {
  let url = `http://www.omdbapi.com/?s=${Name.value}&apikey=b41e2a93`;
  const result2 = await getData(url);
  console.log("LN 14:", result2.data.Search);
  console.log(url);
  let output = document.getElementById("output");
  console.log(output);

  let div = document.createElement("div");
  let tobedispaly = result2.data.Search;
  console.log(tobedispaly.length);
  for (let i = 0; i < tobedispaly.length; i++) {
    let cur = tobedispaly[i];
    console.log(cur.Title);
    div.innerHTML = `<div class="Tiltle">${cur.Title}</div>`;
    console.log(div);
    output.appendChild(div);
  }
};
