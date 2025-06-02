import { clerkClient } from '@clerk/express'
// update role to educator
export const updateRoleToEducator = async (req, res) =>{
    try{
        const userId = req.auth.userId
        console.log('req.auth:', req.auth)
        console.log('User ID from req.auth:', userId);

        await clerkClient.users.updateUserMetadata(userId,{
            publicMetadata:{
                role: 'educator',
            }
        })
        res.json({success : true, message : 'you now can publish a course now'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}