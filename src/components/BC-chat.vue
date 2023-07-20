<template>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </head>
    <body>
      <nav aria-label="breadcrumb px-5">
        <ol class="default-breadcrumb">
          <li class="crumb">
            <div class="link">
              <a href="/dashboard" class="fa fa-home">
                <span class="material-symbols-outlined"> home </span>
              </a>
            </div>
          </li>
          <li class="crumb active">
            <div class="link"><a href="/replymessage">แก้ไขชุดข้อความ</a></div>
          </li>
        </ol>
      </nav>
    </body>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #f5f5f5;
  }
  
  a {
    text-decoration: none;
  }
  
  $breadcrumbs-font-size: 0.5rem;
  $breadcrumbs-background: #eaecf1;
  $breadcrumbs-text-color: #000000;
  $breadcrumbs-active-bg: #FFBD59;
  $breadcrumbs-active-text-color: #ffffff;
  $breadcrumbs-hover-text-color: #708090;
  
  .default-breadcrumb {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: $breadcrumbs-font-size;
    justify-content: flex-start;
  align-items: center;
  padding: 0px;
  
    li.crumb {
      position: relative;
      margin-bottom: 0.5em;
      padding: 0.25em;
      background-color: $breadcrumbs-background;
      color: #0000;
  
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 100%;
        height: 100%;
        width: 1.5em;
        background-color: $breadcrumbs-background;
        clip-path: polygon(50% 50%, -50% -50%, 0 100%);
      }
  
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 1px;
        height: 100%;
        width: 1.5em;
        background-color: $breadcrumbs-background;
        clip-path: polygon(100% 0, 100% 100%, 0% 100%, 50% 50%, 0% 0%);
        transform: translateX(-100%);
      }
  
      &:not(:first-child) {
        margin-left: 2em;
      }
  
      &:first-child {
        padding-left: 0.5em;
        border-radius: 5px 0 0 5px;
  
        &::before {
          display: none;
        }
      }
  
      &:last-child {
        padding-right: 1em;
        border-radius: 0 5px 5px 0;
  
        &::after {
          display: none;
        }
      }
  
      &.active {
        background-color: $breadcrumbs-active-bg;
        color: $breadcrumbs-active-text-color;
  
        &::before,
        &::after {
          background-color: $breadcrumbs-active-bg;
        }
      }
  
      .link {
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
  
      a {
        color: $breadcrumbs-text-color;
  
        &:hover {
          color:$breadcrumbs-hover-text-color;
        }
      }
    }
  }
  
  //rtl style
  *[dir="rtl"] .default-breadcrumb li.crumb {
    text-align: right;
    direction: rtl !important;
  
    &::after {
      right: 100% !important;
      left: unset !important;
      background-color: $breadcrumbs-background;
      clip-path: polygon(50% 50%, 100% 100%, 100% 0);
    }
  
    &::before {
      right: 1px !important;
      left: unset !important;
      clip-path: polygon(0 0, 0 100%, 100% 100%, 50% 50%, 100% 0);
      transform: translateX(100%);
    }
  
    &:not(:first-child) {
      margin-right: 2em;
      margin-left: 0;
    }
  
    &:first-child {
      padding-right: 0.5em;
      padding-left: 0;
      border-radius: 0 5px 5px 0;
    }
  
    &:last-child {
      padding-right: 0;
      padding-left: 1em;
      border-radius: 5px 0 0 5px;
    }
  }
  </style>