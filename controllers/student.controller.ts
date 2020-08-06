// Routes
import * as Router from 'koa-router';

const router = new Router()

router.get('student/display/:studentid', (ctx) => {
    // Controller starts here
})

export const StudentRouters = router;