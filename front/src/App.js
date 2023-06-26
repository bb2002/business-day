import React, { useState } from 'react';
import './App.css';
import useSWR from 'swr';
import { format } from 'date-fns';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
	const [form, setForm] = useState({
		nickname: '',
		leaveAt: format(new Date(), 'yyyy-MM-dd'),
	});
	const { data, error, isLoading } = useSWR('https://day-api.blbt.app/v1/business-day', fetcher, {
		refreshInterval: 3600000,
	});

	return (
		<div className="home">
			<div className="border">
				<div id="selected-user">
					{data && data.length > 0 && (
						<>
							<h3>
								<span id="nickname">{data[0].nickname}</span> 님 앞으로
							</h3>
							<h1>
								<span id="business-day-num">{data[0].businessDayCount}</span> 영업일
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
						<button class="btn btn-success" type="button" style={{ width: 100 }}>
							등록
						</button>
					</div>
					<br />

					<p style={{ color: 'rgb(134, 134, 134)' }}>표를 클릭하면 상단에 표시됩니다.</p>
					{!isLoading && (
						<table class="table">
							<thead>
								<tr>
									<th scope="col">닉네임</th>
									<th scope="col">퇴사일</th>
									<th scope="col">등록일</th>
								</tr>
							</thead>
							<tbody>
								{data.map((d) => (
									<tr>
										<td class="table-dark">{d.nickname}</td>
										<td class="table-dark">
											{format(new Date(d.leaveAt), 'yyyy-MM-dd')} ({d.businessDayCount}일 남음)
										</td>
										<td class="table-dark">{format(new Date(d.createdAt), 'yyyy-MM-dd')}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
