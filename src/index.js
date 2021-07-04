import "./styles.css";

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const onClickAdd = () => {
  // テキストボックスの値を初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompliteList(inputText);
};

// 未完了リストに追加する関数
const createIncompliteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //button(完了)タグ生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompletelist(completebutton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completebutton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompliteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompletelist(deleteButton.parentNode);
  });

  //　未完了リストから指定の要素を削除
  const deleteFromIncompletelist = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deleteButton);
};
