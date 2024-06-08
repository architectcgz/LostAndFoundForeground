const itemsPerPage = 5;  // 每页显示的项目数量
let currentPage = 1;     // 当前页码
let items = [];          // 用于存储从后端获取的所有项目
let filteredItems = [];  // 用于存储搜索过滤后的项目

// 获取失物数据
async function fetchItems() {
  try {
    const response = await fetch('https://example.com/api/lost-items'); // 替换为后端实际API地址
    const data = await response.json();
    if (data.code === 200) {
      items = data.data.map(item => ({
        title: item.name,
        date: item.foundTime,
        description: item.description,
        image: item.image || 'placeholder.jpg' // 使用默认占位符图片
      }));
      filteredItems = [...items];
      displayItems(currentPage);
    } else {
      console.error('Failed to fetch items:', data.message);
    }
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

// 显示指定页码的项目
function displayItems(page) {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';  // 清空现有项目
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filteredItems.slice(start, end);
  paginatedItems.forEach(item => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <img src="${item.image}" alt="失物图片">
      <div class="item-details">
        <h4>${item.title}</h4>
        <p>失物时间：${item.date}</p>
        <p>描述：${item.description}</p>
      </div>
    `;
    itemList.appendChild(newItem);
  });
  document.getElementById('page-info').textContent = `第 ${page} 页，共 ${Math.ceil(filteredItems.length / itemsPerPage)} 页`;

  // 更新按钮状态
  document.getElementById('prev-button').disabled = page === 1;
  document.getElementById('next-button').disabled = page === Math.ceil(filteredItems.length / itemsPerPage);
}

// 更改页码
function changePage(direction) {
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (direction === 'next' && currentPage < totalPages) {
    currentPage++;
  }
  displayItems(currentPage);
}

// 搜索项目
function searchItems() {
  const query = document.getElementById('search-box').value.toLowerCase();
  filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query)
  );
  currentPage = 1;
  if (filteredItems.length === 0) {
    document.getElementById('item-list').innerHTML = '<p>没有找到匹配的失物。</p>';
    document.getElementById('page-info').textContent = '';
  } else {
    displayItems(currentPage);
  }
}

// 初始获取数据并显示第一页
fetchItems();
