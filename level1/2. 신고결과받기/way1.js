function solution(id_list, report, k) {
  let result = [];
  let reportResult = [];
  // 신고한 횟수
  let count = [];
  id_list.forEach((value, idx)=>{
      let data = { user : value, count : 0, personWhoReported : ['noOne'] }
      reportResult.push(data);
      result[idx] = 0;
  });
  report.forEach((item, idx)=>{
      let info = report[idx].split(' ');
      let userId = info[0];
      let reportId = info[1];
      
      // 유저A가 유저B를 신고했다
      reportResult.forEach((item, idx)=>{
          if (item.user == reportId) {
              item.count += 1;
              if (item.personWhoReported[0] != 'noOne') {
                  item.personWhoReported.push(userId);               
              } else item.personWhoReported[0] = userId;  
          }
      });
  }); 
  reportResult.forEach((item, idx)=>{       
      item.personWhoReported = [...new Set(item.personWhoReported)];
      if (item.personWhoReported[0] == 'noOne') item.count = 0;
      else item.count = item.personWhoReported.length;
      if (item.count >= k) {
          item.personWhoReported.forEach((value, vIdx)=>{
              let index = id_list.indexOf(value);
              result[index] += 1;                             
          });
      }
  });
  return result;
}
