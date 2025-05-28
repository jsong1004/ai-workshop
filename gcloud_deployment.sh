gcloud builds submit --config cloudbuild.yaml

gcloud run services update ai-workshop-landing --region us-central1 --update-env-vars SMTP_HOST=smtp.gmail.com,SMTP_PORT=465,GMAIL_USER=jsong@koreatous.com,GMAIL_APP_PASSWORD='ncbp efic orae cruq’,PORT=‘3001’
