# 컴포넌트 모아보기
`newtil-css`는 간편한 웹 문서 스타일링을 지원하기 위해 다양한 컴포넌트를 제공합니다.

아래 컴포넌트를 클릭하여 자세한 사용법을 확인해보세요.

::: raw
<ul class="component-list n-list n-card-list n-list-item-border-rd:4 jc:space-around">
    <li>
        <a href="../component/font">
            <section>
                <h1>Font</h1>
                <div class="d:flex jc:center">
                    <div class="fonts d:flex fl-dir:column">
                        <h1 class="n-font:title text-align:left">This is Title.</h1>
                        <h2 class="n-font:subtitle text-align:left">This is Subtitle.</h2>
                        <h1 class="n-font:h1 text-align:left">This is h1.</h1>
                        <h2 class="n-font:h2 text-align:left">This is h2.</h2>
                        <h3 class="n-font:h3 text-align:left">This is h3.</h3>
                    </div>
                </div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/panel">
            <section>
                <h1>Panel</h1>
                <div class="border h:full d:flex fl-dir:column font-size:1">
                    <div class="top-panel text-align:center bg-color:base-4 "></div>
                    <div class="fl-grow:1 d:flex">
                        <div class="side-panel bg-color:base-2"></div>
                        <div></div>
                    </div>
                </div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/container">
            <section>
                <h1>Container</h1>
                <div class="bg-color:base-2 border">
                    <div class="container bg-color:base-1 h:full mx:auto"></div>
                </div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/item">
            <section>
                <h1>Item</h1>
                <div class="n-item"></div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/button">
            <section>
                <h1>Button</h1>
                <div class="d:flex ai:center jc:center">
                    <button class="n-btn n-btn-type:filled n-btn:3">label</button>
                </div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/list">
            <section>
                <h1>List</h1>
                <ul class="n-list n-list-item-border-rd:3 n-list-item-p:2 gap:2 my:auto">
                    <li class="text-align:center"></li>
                    <li class="text-align:center"></li>
                    <li class="text-align:center"></li>
                </ul>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/table">
            <section>
                <h1>Table</h1>
                <table class="n-table n-table-b n-cell-h:1 font-size:1">
                    <thead>
                        <tr>
                            <th scope="col">...</th>
                            <th scope="col">...</th>
                            <th scope="col">...</th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 4">
                            <th scope="row">...</th>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table> 
            </section>
        </a>
    </li>
    <li>
        <a href="../component/form">
            <section>
                <h1>Form</h1>
                <form class="n-form">
                    <div class="fl-dir:column">
                        <label class="as:start">label</label>
                        <input type="text" class="w:full" autofocus="true" />
                    </div>
                    <div class="fl-dir:column mt:2">
                        <label class="as:start">label</label>
                        <input type="text" class="w:full" />
                    </div>
                </form>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/modal">
            <section>
                <h1>Modal</h1>
                <div class="n-modal d:flex fl-dir:column border w:full h:fit-content pos:relative z-index:1">
                    <h1 class="text-align:center mt:2 font-weight:2">Title</h1>
                    <p class="word-b:break-all mt:2">Lorem ipsum dolor sit amet.</p>
                    <div class="mt:auto">
                        <button class="n-btn n-btn-size:1 w:full">
                            label
                        </button>
                    </div>
                    <div class="pos:absolute top:2 right:4">
                        <button type="button" class="btn p:0">
                            <span class="icon icon:x icon:2">Close</span>
                        </button>
                    </div>
                </div>
            </section>
        </a>
    </li>
    <li>
        <a href="../component/toggle">
            <section>
                <h1>Toggle</h1>
                <div class="d:flex fl-dir:column ai:center jc:center">
                    <label class=""><input class="n-toggle n-toggle-size:3" type="checkbox"/></label>
                    <label class=""><input class="n-toggle n-toggle-size:3 mt:2" type="checkbox" checked/></label>
                </div>
            </section>
        </a>
    </li>
</ul>
:::

<br>

- [컴포넌트 시작하기](../guide/getting-started-component.md)


<style scoped>
    .component-list > li {
        width:218px;
        height: 250px;
        cursor: pointer;
        transition: box-shadow 0.2s
    }

    .component-list > li:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    /* section */
    .component-list section {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .component-list section > h1 {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
    }

    .component-list section > :nth-child(2) {
        margin-top: 16px;
    } 

    .component-list section > :nth-child(2):is(div) {
        flex-grow: 1;
    }

    /* font */
    .fonts {
        transform: scale(0.8);
        /* transform-origin: left; */
    }

    /* container */
    .container {
        width: 80%;
    }

    /* modal */
    .n-modal {
        position: relative;
        top: 0;
        right: 0;
        transform: translate(0, 0);
    }

    /* panel */
    .top-panel {
        height: 20%;
    }

    .side-panel {
        width: 25%;
        height: 100%;
    }
</style>