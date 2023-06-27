import React, { useState } from 'react';
import './App.css';
import useSWR from 'swr';
import { format } from 'date-fns';
import axios from 'axios';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DEFAULT = {
  nickname: '',
  leaveAt: format(new Date(), 'yyyy-MM-dd'),
}

function App() {
	const [form, setForm] = useState(DEFAULT);
  const [otherError, setError] = useState(null)
  const [showItem, setShowItem] = useState(null)

	const { data, error, isLoading } = useSWR('https://day-api.blbt.app/v1/business-day', fetcher, {
		refreshInterval: 3600000,
	});

  const onAddBusinessDayClicked = () => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://day-api.blbt.app/v1/business-day',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : form
    };
    
    axios.request(config)
      .then(() => {
        window.location.reload(false)
      })
      .catch((error) => {
        setError(error?.response?.data?.error)
      });
  }

  const onTableClicked = (idx) => {
    setShowItem(data[idx]);
  }

	return (
		<div className="home">
			<div className="border">
      {
        (error) && (
          <div class="alert alert-danger" role="alert">
            An Error Occurred: {error}
          </div>
        )
      }
      {
        (otherError) && (
          <div class="alert alert-danger" role="alert">
            An Error Occurred: {otherError}
          </div>
        )
      }
				<div id="selected-user">
					{data && data.length > 0 && (
						<>
							<h3>
								<span id="nickname">{showItem ? showItem.nickname : data[data.length - 1].nickname}</span> 님 앞으로
							</h3>
							<h1>
								<span id="business-day-num">{showItem ? showItem.businessDayCount : data[data.length - 1].businessDayCount}</span> 영업일
							</h1>
						</>
					)}

					{data && data.length < 1 && <h3>아직 영업일을 등록한 사람이 없습니다.</h3>}
				</div>
				<div id="select-user" className="container">
					<h4>내 영업일을 찾거나 등록</h4>
					<div class="input-group">
						<span class="input-group-text">닉네임</span>
						<input
							type="text"
							aria-label="닉네임"
							class="form-control"
							placeholder="이름 또는 닉네임"
							value={form.nickname}
							onChange={(e) => setForm({ ...form, nickname: e.target.value })}
						/>
						<span class="input-group-text">퇴사일</span>
						<input
							type="date"
							aria-label="퇴사일"
							class="form-control"
							value={form.leaveAt}
							onChange={(e) => setForm({ ...form, leaveAt: e.target.value })}
						/>
						<button class="btn btn-success" type="button" style={{ width: 100 }} onClick={onAddBusinessDayClicked}>
							등록
						</button>
					</div>
					<br />

					<p style={{ color: 'rgb(134, 134, 134)', margin: 0 }}>공휴일과 주말을 제외한 출근일만 계산됩니다.</p>
					<p style={{ color: 'rgb(134, 134, 134)' }}>표 아이템을 클릭하여 상단에 표시합니다.</p>
					{!isLoading && (
            <div id="user-table">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">닉네임</th>
                    <th scope="col">퇴사일</th>
                    <th scope="col">등록일</th>
                  </tr>
                </thead>
                <tbody>
                  {data.filter((d) => form.nickname ? d.nickname.indexOf(form.nickname) !== -1 : true).map((d, idx) => (
                    <tr onClick={() => onTableClicked(idx)} style={{ cursor: 'pointer' }}>
                      <td class="table-dark">{d.nickname}</td>
                      <td class="table-dark">
                        {format(new Date(d.leaveAt), 'yyyy-MM-dd')} ({d.businessDayCount}일 남음)
                      </td>
                      <td class="table-dark">{format(new Date(d.createdAt), 'yyyy-MM-dd')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
