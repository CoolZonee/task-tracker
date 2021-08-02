import http from '../http-common';

class TaskService {
    getAll() {
        return http.get("/task_tracker/");
    }

    create(data) {
        return http.post("/task_tracker/", data);
    }

    update(id, data) {
        return http.put(`/task_tracker/${id}/`, data);
    }

    delete(id) {
        return http.delete(`/task_tracker/${id}/`);
    }
}

export default new TaskService();