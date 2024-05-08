export const fetchjobs = createAsyncThunk(
    'jobs/fetchjobs',
    async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const body = JSON.stringify({
        "limit": 10,
        "offset": 0
      });
  
      try {
        const response = await axios.get("https://api.weekday.technology/adhoc/getSampleJdJSON", body, {
          headers: myHeaders
        });
        console.log(response)
        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch jobs');
      }
    }
  );