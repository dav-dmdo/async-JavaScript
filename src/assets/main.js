const content = null || document.getElementById('content');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCZbq1qvbQzxDGUyuoPnF4LQ&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bfcad2962amshfe3368b7d0393fdp1172f0jsn9cc2b4450cb1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlAPI, resquestOptions){
  try {
    const response = await fetch(urlAPI, resquestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  const videos = await fetchData(API, options);
  let view = `
  ${videos.items.map(video => `
    <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title}
        </h3>
      </div>
    </div>
  `)}
  `
  content.innerHTML = view;

})();