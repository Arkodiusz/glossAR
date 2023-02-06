chrome.runtime.onInstalled.addListener(() => {
  console.log("Hello world from glossAR")  
})


chrome.contextMenus.create({
  id: "1",
  title: "Translate with glossAR",
  contexts: ["selection"],
})