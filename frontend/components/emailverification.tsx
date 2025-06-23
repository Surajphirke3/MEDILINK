// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// export default function VerifyEmailPage() {
//   const router = useRouter();
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [requestLoading, setRequestLoading] = useState(false);
//   const [otpError, setOtpError] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

//   useEffect(() => {
//     handleRequestOtp();
//   }, []);

//   const handleRequestOtp = async () => {
//     setRequestLoading(true);
//     setMessage('');
//     setMessageType('');

//     try {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         router.push('/login');
//         return;
//       }

//       const res = await fetch('http://localhost:5000/v1/auth/email-verify/request', {
//         method: 'GET',
//         headers: {
//           'Authorization': token
//         }
//       });

//       const data = await res.json();

//       if (res.ok && data.message === "verification request sent successful") {
//         setMessage('OTP sent to your email.');
//         setMessageType('success');
//       } else {
//         throw new Error(data.message || data.error || 'Failed to send OTP');
//       }
//     } catch (error: any) {
//       setMessage(error.message);
//       setMessageType('error');
//     } finally {
//       setRequestLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setOtpError(false);
//     setMessage('');
//     setMessageType('');

//     try {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         router.push('/login');
//         return;
//       }

//       const res = await fetch('http://localhost:5000/v1/auth/email-verify/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//         },
//         body: JSON.stringify({ otp })
//       });

//       const data = await res.json();

//       if (res.ok && data.message === "verification successful") {
//         setMessage('Email verified successfully!');
//         setMessageType('success');
//         const userRole = data.data.role;
//         setTimeout(() => router.push(`/${userRole}/dashboard`), 1000);
//       } else {
//         setOtpError(true);
//         throw new Error(data.message || data.error || 'Invalid OTP');
//       }
//     } catch (error: any) {
//       setMessage(error.message);
//       setMessageType('error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md border-2 shadow-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold text-center text-green-600">Verify Your Email</CardTitle>
//           <CardDescription className="text-center text-muted-foreground">
//             Please enter the OTP sent to your email address
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="otp" className="text-sm font-medium">OTP</Label>
//                 <Input
//                   id="otp"
//                   name="otp"
//                   type="text"
//                   required
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                   className="mt-1.5"
//                 />
//               </div>
//               {otpError && (
//                 <p className="text-red-500 text-sm mt-1">Invalid OTP</p>
//               )}
//               {message && (
//                 <p className={`text-sm mt-1 ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
//                   {message}
//                 </p>
//               )}
//             </div>

//             <div className="flex flex-col gap-4">
//               <Button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
//                 disabled={loading}
//               >
//                 {loading ? 'Verifying...' : 'Verify Email'}
//               </Button>
              
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="w-full border-green-600 text-green-600 hover:bg-green-50"
//                 onClick={handleRequestOtp}
//                 disabled={requestLoading}
//               >
//                 {requestLoading ? 'Sending...' : 'Resend OTP'}
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
