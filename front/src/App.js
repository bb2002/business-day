import React, { useState } from 'react';
import './App.css';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { data, error, isLoading } = useSWR('https://day-api.blbt.app/v1/business-day', fetcher, {
    refreshInterval: 3600000,
  });

  console.log(data, error, isLoading)

  return (
    <div className="home">
      <div className="border">
        <div id="selected-user">
          <h3><span id="nickname">nickname</span> 님 앞으로</h3>
          <h1><span id="business-day-num">0</span> 영업일</h1>
        </div>
        <div id="select-user" className="container">
          <h4>내 영업일을 찾거나 등록</h4>
          <div class="input-group">
            <span class="input-group-text">닉네임</span>
            <input type="text" aria-label="닉네임" class="form-control" placeholder="이름 또는 닉네임"/>
            <span class="input-group-text">퇴사일</span>
            <input type="date" aria-label="퇴사일" class="form-control" />
            <button class="btn btn-success" type="button" style={{ width: 100 }}>등록</button>
          </div>
          <br />

          <p style={{ color: 'rgb(134, 134, 134)' }}>표를 클릭하면 상단에 표시됩니다.</p>
          {
            !isLoading && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">닉네임</th>
                  <th scope="col">퇴사일</th>
                  <th scope="col">등록일</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((d) => (
                  <tr>
                    <td class="table-dark">{d.nickname}</td>
                    <td class="table-dark">{d.leaveAt} ({d.businessDayCount}일 남음)</td>
                    <td class="table-dark">{d.createdAt}</td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
