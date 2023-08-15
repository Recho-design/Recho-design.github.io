// function toggleDiv() {
//   var videoDiv = document.getElementById("video-D5_1");
  
//   if (videoDiv.style.display === "none" || videoDiv.style.display === "") {
//     videoDiv.style.display = "block";
//   } else {
//     videoDiv.style.display = "none";
//   }
// }

// function closeDiv() {
//   var videoDiv = document.getElementById("video-D5_1");
//   videoDiv.style.display = "none";
// }

var videoSrc = "//player.bilibili.com/player.html?aid=202579142&bvid=BV12a411A7JJ&cid=250363655&page=1"; // 保存视频链接

  // 页面加载完成时执行
  window.onload = function() {
    // 获取 iframe 的外链
    var iframe = document.getElementById("videoPlayer");
    videoSrc = iframe.src;
  };

  function toggleDiv() {
    var videoDiv = document.getElementById("video-D5_1");
    var iframe = document.querySelector('#video-D5_1 iframe');

    if (videoDiv.style.display === "none" || videoDiv.style.display === "") {
      // 显示视频弹窗
      videoDiv.style.display = "block";

      // 赋值视频链接
      iframe.src = videoSrc;
    } else {
      // 隐藏视频弹窗
      videoDiv.style.display = "none";

      // 清空视频链接
      iframe.src = "";
    }
  }

  function closeDiv() {
    var videoDiv = document.getElementById("video-D5_1");
    videoDiv.style.display = "none";

    // 清空视频链接
    var iframe = document.querySelector('#video-D5_1 iframe');
    iframe.src = "";
  }

//   如果页面中有多个视频，并且你希望它们互相独立，不会混淆链接和状态，你可以为每个视频创建独立的变量来保存其链接和状态。

// 以下是一个示例代码，演示如何处理页面中多个独立的视频：

// html
// Copy code
// <div id="video-D5_1" class="model-container">
//   <iframe id="videoPlayer1" src="//player.bilibili.com/player.html?aid=202579142&bvid=BV12a411A7JJ&cid=250363655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
//   <button class="btn btn-close btn-close-white" onclick="closeDiv(1)"></button>
// </div>

// <div id="video-E6_1" class="model-container">
//   <iframe id="videoPlayer2" src="//player.bilibili.com/player.html?aid=202579143&bvid=BV12a411A7KK&cid=250363656&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
//   <button class="btn btn-close btn-close-white" onclick="closeDiv(2)"></button>
// </div>

// <script>
//   var videoSrc1 = ""; // 保存视频1的链接
//   var videoSrc2 = ""; // 保存视频2的链接

//   // 页面加载完成时执行
//   window.onload = function() {
//     // 获取视频1的链接
//     var iframe1 = document.getElementById("videoPlayer1");
//     videoSrc1 = iframe1.src;

//     // 获取视频2的链接
//     var iframe2 = document.getElementById("videoPlayer2");
//     videoSrc2 = iframe2.src;
//   };

//   function toggleDiv(videoNum) {
//     var videoDiv;
//     var iframe;
//     var videoSrc;

//     if (videoNum === 1) {
//       videoDiv = document.getElementById("video-D5_1");
//       iframe = document.querySelector('#videoPlayer1');
//       videoSrc = videoSrc1;
//     } else if (videoNum === 2) {
//       videoDiv = document.getElementById("video-E6_1");
//       iframe = document.querySelector('#videoPlayer2');
//       videoSrc = videoSrc2;
//     }

//     if (videoDiv.style.display === "none" || videoDiv.style.display === "") {
//       // 显示视频弹窗
//       videoDiv.style.display = "block";

//       // 赋值视频链接
//       iframe.src = videoSrc;
//     } else {
//       // 隐藏视频弹窗
//       videoDiv.style.display = "none";

//       // 清空视频链接
//       iframe.src = "";
//     }
//   }

//   function closeDiv(videoNum) {
//     var videoDiv;
//     var iframe;

//     if (videoNum === 1) {
//       videoDiv = document.getElementById("video-D5_1");
//       iframe = document.querySelector('#videoPlayer1');
//     } else if (videoNum === 2) {
//       videoDiv = document.getElementById("video-E6_1");
//       iframe = document.querySelector('#videoPlayer2');
//     }

//     videoDiv.style.display = "none";

//     // 清空视频链接
//     iframe.src = "";
//   }
// </script>
// 在这个示例中，我们为每个视频创建了独立的变量来保存链接。在 toggleDiv() 和 closeDiv() 函数中，根据视频的编号来选择相应的元素和变量。

// 例如，视频1的容器使用 id "video-D5_1"，iframe 使用 id "videoPlayer1"，视频1的链接保存在变量 videoSrc1 中。当调用 toggleDiv(1) 或 closeDiv(1) 时，操作的是视频1的元素和变量。

// 同样地，视频2的容器使用 id "video-E6_1"，iframe 使用 id "videoPlayer2"，视频2的链接保存在变量 videoSrc2 中。当调用 toggleDiv(2) 或 closeDiv(2) 时，操作的是视频2的元素和变量。

// 通过这种方式，每个视频都有独立的元素和变量来保存链接和状态，避免了混淆的问题。